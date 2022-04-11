export const heroOne = {
	id: 'projects',
	topLine: {
		text: 'Productos',
	},
	headline: 'Juguetes, Accesorios y mas',
	description: 'Desde juegos interactivos , hasta disfraces y accesorios de cuidado',
	buttonLabel: '+Info',
	imgStart: 'start',
	
	backgroundColor: 'linear-gradient(	150deg,#c99fff -20%,#4a4eff)',
	img:'./images/market.svg',
	start: 'true',
};

export const heroTwo = {
	reverse: true,
	topLine: {
		text: 'Healthcare',
	},
	headline: 'Planes de Salud',
	description:
		"Un seguro medico el cual te cubre en todas nuestras sucursales los 365 días del año",
	buttonLabel: '+Info',

	linkTo: '/more',
	imgStart: 'start',
	img: './images/vet.svg',
	backgroundColor: 'linear-gradient(	140deg	,#ffaf73 30%,#fffecc 120%)',

	start: 'true',
};

export const heroThree = {
	topLine: {
		text: 'Servicios de cuidado',
	},
	headline: "Cortes y Baños",
	description:
		'Nuestro equipo esta altamente capacitado para brindar una sesion placentera y relajada a tu mascota',
	buttonLabel: '+Info',

	linkTo: '/download',
	imgStart: '',
	backgroundColor: 'linear-gradient(225deg,#0abac2,#b2de94)',
	img: './images/hair-salon.svg',
	start: 'true',
};
