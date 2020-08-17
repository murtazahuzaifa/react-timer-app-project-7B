import React from 'react';
import {shallow, mount} from 'enzyme';
import TimeDisplayer from './TimeDisplayer';

describe('TimeDisplayer',()=>{
    const mockFn = jest.fn(); 
    const params = {min:0, sec:0, miliSec:0, timerIsOn:false, startTimer:mockFn, stopTimer:mockFn, resetTimer:mockFn}
    let wrapper  = mount(<TimeDisplayer {...params} />)
    // let wrapper:any;
    // beforeEach(()=> wrapper  = mount(<TimeDisplayer min={0} sec={0} miliSec={0} timerIsOn={false} startTimer={mockFn} stopTimer={mockFn} resetTimer={mockFn}/>) )

    it('should render a <TimeDisplayer/>',()=>{
        const divContainer = wrapper.find('div.timer');
        expect(divContainer.length).toBe(1);
        expect(divContainer.text()).toBe('Reset00:0000Start');
    });

    it("minutes & seconds class tag should have value '01' ",()=>{
        params.min = 1; params.sec = 1; params.miliSec = 1
        const wrapper = shallow(<TimeDisplayer {...params}/>);
        const minutesClassTag = wrapper.find('span.minutes').text();
        const secondsClassTag = wrapper.find('span.seconds').text();
        const miliSecondsClassTag = wrapper.find('span.miliSeconds').text();
        expect(minutesClassTag).toBe('01');
        expect(secondsClassTag).toBe('01');
        expect(miliSecondsClassTag).toBe('01');
    });

    it("minutes, seconds & milisecond class tag should have value '10' ",()=>{
        params.min = 10; params.sec = 10; params.miliSec = 10;
        const wrapper = shallow(<TimeDisplayer {...params}/>);
        const minutesClassTag = wrapper.find('span.minutes').text();
        const secondsClassTag = wrapper.find('span.seconds').text();
        const miliSecondsClassTag = wrapper.find('span.miliSeconds').text();
        expect(minutesClassTag).toBe('10');
        expect(secondsClassTag).toBe('10');
        expect(miliSecondsClassTag).toBe('10');
    });

})