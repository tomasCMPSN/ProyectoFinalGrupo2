import React from 'react';
import { BsPhone } from 'react-icons/bs';
import { GiConcentrationOrb } from 'react-icons/gi';
import { IoIosPaw } from 'react-icons/io';
import { IoIosSchool } from 'react-icons/io';
import { HiCode } from 'react-icons/hi';
import { MdSlowMotionVideo } from 'react-icons/md';
import { FaAmbulance } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { FiActivity } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const iconStyle = (Icon) => <Icon size="3rem" color="#fefefe" />;

export const featuresData = [
	{
		name: 'Tecnología de Vanguardia    ',
		description:
			'Instalaciones de última generación para terapias   ',
		icon: iconStyle(FiActivity),
		imgClass: 'one',
	},
	{
		name: 'Nuevas Sucursales',
		description: 'Estamos expandiéndonos a lo largo del país',
		icon: iconStyle(FiMapPin),
		imgClass: 'two',
	},
	{
		name: 'Arca de Noe',
		description: 'Nos especializamos en diferentes especies',
		icon: iconStyle(IoIosPaw),
		imgClass: 'three',
	},
	{
		name: 'Educación',
		description: 'Brindamos programas de educación gratuitos',
		icon: iconStyle(IoIosSchool),
		imgClass: 'four',
	},
	{
		name: 'Emergencias',
		description: 'Emergencias 24/7 los 365 días del año',
		icon: iconStyle(FaAmbulance),
		imgClass: 'five',
	},
	{
		name: 'Alojamiento',
		description: 'Contamos con alojamientos para mascotas',
		icon: iconStyle(BsFillHouseFill),
		imgClass: 'six',
	},
];
