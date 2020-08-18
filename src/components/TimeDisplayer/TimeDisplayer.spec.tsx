import React from 'react';
import {shallow, mount} from 'enzyme';
import TimeDisplayer from './TimeDisplayer';
// import {TimerDisplayerType} from '../../Types';

describe('TimeDisplayer',()=>{

    const params = {min:0, sec:0, miliSec:0, timerIsOn:false, startTimer:jest.fn(), stopTimer:jest.fn(), resetTimer:jest.fn()}
    // beforeEach(()=> {
        // wrapper  = mount(<TimeDisplayer {...params} />)
    // })

    it('should render a <TimeDisplayer/>',()=>{
        const wrapper  = mount(<TimeDisplayer {...params} />)
        const divContainer = wrapper.find('div.timer');
        expect(divContainer.length).toBe(1);
        expect(divContainer.text()).toBe('Reset00:0000Start');
    });

    it("minutes, seconds & milisecond class tag should have value '01' ",()=>{
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

    it('when click on start button, its text should be changed to stop and when on stop it should changed to start',()=>{
        expect(params.startTimer).toBeCalledTimes(0);
        const wrapper = shallow(<TimeDisplayer {...params}/>);
        expect(wrapper.find('div.controller').length).toEqual(1);
        const startStopBtn = wrapper.find('div.controller').children('button');
        expect(startStopBtn.length).toEqual(1);
        expect(startStopBtn.text()).toEqual('Start');
        startStopBtn.simulate('click');
        expect(params.startTimer).toBeCalledTimes(1);
    })

})