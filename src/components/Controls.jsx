import { useState } from 'react';
import styled from 'styled-components';
import { CustomSelect } from './CustomSelect';
import { Search } from './Search';

const options = [
	{value: 'Africa', label: 'Africa'},
	{value: 'America', label: 'America'},
	{value: 'Asia', label: 'Asia'},
	{value: 'Europe', label: 'Europe'},
	{value: 'Oceania', label: 'Oceania'}
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Controls = () => {
	const [region, setRegion] = useState('')

  return (
	<Wrapper>
		<Search />
		<CustomSelect 
			options={options}
			placeholder="Filter by Region"
			isClearable
			isSearchable={false}
			value={region}
			onChange={setRegion}
		/>
	</Wrapper>
  );
};