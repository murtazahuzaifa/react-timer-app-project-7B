import React from 'react';
import {shallow} from 'enzyme';
import TimeDisplayer from './TimeDisplayer';

describe('TimeDisplayer',()=>{

    it('should render a <TimeDisplayer/>',()=>{
        const wrapper = shallow(<TimeDisplayer min={0} sec={0}/>);
        const divContainer = wrapper.find('div.timerDisplayer');
        expect(divContainer.exists()).toBe(true);
        expect(divContainer.text()).toBe('00:00');
    });

    it("minutes & seconds class tag should have value '01' ",()=>{
        const wrapper = shallow(<TimeDisplayer min={1} sec={1}/>);
        const minutesClassTag = wrapper.find('span.minutes').text();
        const secondsClassTag = wrapper.find('span.seconds').text();
        expect(minutesClassTag).toBe('01');
        expect(secondsClassTag).toBe('01');
    });

    it("minutes & seconds class tag should have value '10' ",()=>{
        const wrapper = shallow(<TimeDisplayer min={10} sec={10}/>);
        const minutesClassTag = wrapper.find('span.minutes').text();
        const secondsClassTag = wrapper.find('span.seconds').text();
        expect(minutesClassTag).toBe('10');
        expect(secondsClassTag).toBe('10');
    });

})