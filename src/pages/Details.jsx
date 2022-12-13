import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {IoArrowBack} from 'react-icons/io5';

import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
	const { name } = useParams();
	const nav = useNavigate();
	const [country, setCountry] = useState(null);

	console.log(country);

	useEffect(() => {
	  axios.get(searchByCountry(name)).then(
		({data}) => setCountry(data[0])
	  );
	}, [name]);

  return (
	<div>
		<Button onClick={() => nav(-1)}>
			<IoArrowBack /> Back
		</Button>
		{country && <Info nav={nav} {...country} />}
	</div>
  )
}
