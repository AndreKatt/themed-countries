import { CustomSelect } from './CustomSelect';
import { Search } from './Search';

const options = [
	{value: 'Africa', label: 'Africa'},
	{value: 'America', label: 'America'},
	{value: 'Asia', label: 'Asia'},
	{value: 'Europe', label: 'Europe'},
	{value: 'Oceania', label: 'Oceania'}
];

export const Controls = () => {

  return (
	<div>
		<Search />
		<CustomSelect options={options} />
	</div>
  );
};