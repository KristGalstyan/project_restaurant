import React from 'react';

import { images } from '../../constants';

const SubHeading = () => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">Chase the new Flavour</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
