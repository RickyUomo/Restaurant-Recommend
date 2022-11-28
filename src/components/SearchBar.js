import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function SearchBar({ types, basedOn, setType, type, setBased, based }) {
    const handleTypeChange = (e) => {
        setType(e.target.value);
    }
    const handleBasedChange = e => setBased(e.target.value);

    return (
        <>
            <FormControl fullWidth>
                <InputLabel >Restaurant Type</InputLabel>
                <Select
                    value={type}
                    label="Type"
                    onChange={handleTypeChange}
                >
                    {types.map(t => (<MenuItem key={t} value={t}>{t}</MenuItem>))}
                </Select>

            </FormControl>

            <FormControl fullWidth>
                <InputLabel >Based On</InputLabel>
                <Select
                    value={based}
                    label="Based"
                    onChange={handleBasedChange}
                >
                    {basedOn.map(b => (<MenuItem key={b} value={b}>{b}</MenuItem>))}
                </Select>
            </FormControl>
        </>
    );
};