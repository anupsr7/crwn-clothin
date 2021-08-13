import React from 'react';
import './button.component.style.scss';

const CustomButton = ({children, ...otherProps}) => (
 <button className='custom-button' {...otherProps}>{children}</button>
)

export default CustomButton;