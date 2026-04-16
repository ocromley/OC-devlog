import { useSearchParams } from 'react-router-dom';

interface TagFilterProps {
  tags: string[];
}

export default function TagFilter({ tags }: TagFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get('tag') || '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val) {
      setSearchParams({ tag: val });
    } else {
      setSearchParams({}); // This clears the filter to show all entries
    }
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
      <label htmlFor="tag-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Filter by Tag:
      </label>
      <select 
        id="tag-select" 
        value={activeTag} 
        onChange={handleChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      >
        <option value="">All Tags</option>
        {tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}