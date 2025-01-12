import { Button } from '@mui/material';
import React from 'react';

const Material: React.FC = () => {
    
    const getMaterials = () => {
      console.log(window.api.materialService.getMaterials())
    }

    return (
      <>
        <Button onClick={getMaterials}>
          Teste
        </Button>
      </> 
    );
};

export default Material;