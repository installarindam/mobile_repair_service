import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import './model.css'
const supabaseUrl = 'https://ciqwcirzaqqjarvfwwnc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpcXdjaXJ6YXFxamFydmZ3d25jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODcxNzMwOSwiZXhwIjoyMDM0MjkzMzA5fQ.Bk7kYL2pchEcRzvGbsMrs7RUB5PXTBDBsbJW5xlHOFA';
const supabase = createClient(supabaseUrl, supabaseKey);

function Models() {
  const { brandId } = useParams();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      const { data: models, error } = await supabase
        .from('models')
        .select('*')
        .eq('brand_id', brandId);
      if (error) {
        console.error('Error fetching models:', error.message);
        return;
      }
      setModels(models);
    };

    fetchModels();
  }, [brandId]);

  return (
    <div className="model-selection">
      <h2>Select Your Model</h2>
      <div className="models-grid">
        {models.map((model) => (
          <div key={model.id} className="model-item">
            <img src={model.image_url} alt={model.name} />
            <p>{model.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Models;
