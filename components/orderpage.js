import fetchCss from '../utils/fetchCss.js';
class OrderPage extends HTMLElement {
	deletedItem = null ;
	constructor() {
		super();
		this.root = this.attachShadow({ mode: 'open' });
		
	}
	connectedCallback() {

		this.render()
		this.deleteItem()
		console.log('deletedItem', this.deletedItem)
         window.addEventListener('cartchange',()=>{
			this.render()
		 })
	}
	render(){
		this.root.innerHTML = ''
		const style = document.createElement('style');
		this.root.prepend(style);
		async function loadCss() {
			const data = await fetchCss('./components/OrderPage.css');
			style.textContent = data;
		}
		loadCss();

		let cart = window.app.store.cart

		if(cart.length <= 0){
			const  div = document.createElement('h1')
			div.innerHTML = `
			    <h1> Your Cart Is Empty </h1>
				<button class='go-shop'> Go to Shopping </button>
			`
			this.root.appendChild(div)
			this.root.querySelector('.go-shop').addEventListener('click',()=>{
				window.app.store.router.go('/')
			})
			return
		}
		cart.map(({id , name , qty , price})=>{
			const div = document.createElement('div')
			div.className +='flex cart-item'
			div.innerHTML = `
				<p class="n">${name} - (${qty}) cup</p>
				<p class="p">${price}$</p>
				<button class='d' data-id=${id}> delete </button>
			`
	
			this.root.appendChild(div)
		})
		this.deleteItem()
		const hr = document.createElement('hr')
		this.root.appendChild(hr)
        let totalPrice = cart.reduce((accum , val)=>{
			return accum + (val.qty * val.price )
		},0);
		const total = document.createElement('div')
		total.className = 'flex'
		total.innerHTML = `
		   <p> Total Price is  </p>
		   <p>${totalPrice} $ </p>
		`
		this.root.appendChild(total)


		const goshop = document.createElement('button')
		goshop.innerText = 'Go To Shopping'
		goshop.className = 'go-shop'
		this.root.appendChild(goshop)
		this.root.querySelector('.go-shop').addEventListener('click',()=>{
			window.app.store.router.go('/')
		})

	}

   deleteItem (){
	const deleteBtns = Array.from(this.root.querySelectorAll('.d'))  
	for(let i=0 ; i<deleteBtns.length ;i++){
		 deleteBtns[i].addEventListener('click',()=>{
			let itemNum = +deleteBtns[i].dataset.id
			const cart = window.app.store.cart.filter((item)=>item.id !== itemNum)
			window.app.store.cart = cart
		 })
	}
   }
}

customElements.define('order-page', OrderPage);

export default OrderPage;
