import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ciqwcirzaqqjarvfwwnc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcXdjaXJ6YXFxamFydmZ3d25jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODcxNzMwOSwiZXhwIjoyMDM0MjkzMzA5fQ.Bk7kYL2pchEcRzvGbsMrs7RUB5PXTBDBsbJW5xlHOFA';
const supabase = createClient(supabaseUrl, supabaseKey);

function Brands() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrands = async () => {
      const { data: brands, error } = await supabase.from('brands').select('*');
      if (error) {
        console.error('Error fetching brands:', error.message);
        return;
      }
      setBrands(brands);
    };

    fetchBrands();
  }, []);

  return (
    <div className="brands-section">
      <h2>Choose Your Smartphone Brand</h2>
      <div id="brandsGrid" className="grid-container">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-card" onClick={() => navigate(`/brand/${brand.id}/models`)}>
            <img src={brand.logo_url} alt={brand.name} />
            <h3>{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
