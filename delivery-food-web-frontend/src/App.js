import axios from 'axios';
import { useState } from 'react';


function App() {
  // React.js
// eslint-disable-next-line no-undef
const [items, setItems] = useState([]);
// eslint-disable-next-line no-undef
const [query, setQuery] = useState('');

const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(`/search?query=${query}`);
    setItems(res.data);
}

return (
    <div>
        <form onSubmit={handleSearch}>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            <button type="submit">Search</button>
        </form>
        {items.map(item => (
            <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
);

}

export default App;
