import React from 'react';
import {shallow} from 'enzyme';
import Button from './Button';

describe('Button',()=>{
    it('render a <button/>',()=>{
        let a:number = 0;
        const button = shallow(<Button onClick={()=>{a+=1}}/>);
        expect(button.find('button').length).toEqual(1);
        button.simulate('click');
        expect(a).toEqual(1);
    })
})