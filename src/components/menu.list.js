import React from 'react'

const menu = [
	{name:"Prisijūngimas gyventojams", href:"404"},
	{name:"Struktūra ir kontaktai", href:"404"},
	{name:"Teisinė informacija", href:"404"},
	{name:"Veiklos sritys", href:"404"},
	{name:"Korupcijos prevencija", href:"404"},
	{name:"Administracinė informacija", href:"404"},
	{name:"Paslaugos", href:"404"},
	{name:"Nuorodos", href:"404"},
	{name:"Karjera", href:"404"},
	{name:"Renginių kalendorius", href:"404"},
	{name:"Posėdžiai", href:"404"},
	{name:"Tarybos posėdis", href:"404"},
	{name:"Potvynis", href:"404"},
	{name:"Bendruomenių veikla", href:"404"},
	{name:"Valstybės šimtmetis", href:"404"},
	{name:"Priėmimas į darželius", href:"404"},
]


const menuListBuild = menu.map((listItem, i)=>(
	<li key={i}>
		<a href={listItem.href}>{listItem.name}</a>
	</li>

))
const MenuList = () => (
		<ul
			className="sidebar-list"
		>
			{menuListBuild}
		</ul>
)

export default MenuList