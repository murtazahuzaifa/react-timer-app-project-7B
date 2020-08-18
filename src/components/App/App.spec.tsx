import React from 'react';
import {mount} from 'enzyme';
import App, {utils, setTime} from './App';
import {TimeDisplayer} from '../../components';
import { act } from 'react-dom/test-utils';

describe('App', ()=>{

    // let wrapper  = mount(<App/>)
    let wrapper:any;
    beforeEach(()=> wrapper  = mount(<App/>) )

     it('should a top heading <Timer App>',()=>{
         const heading = wrapper.find('h1.heading');
         expect(heading.length).toEqual(1);
         expect(heading.text()).toEqual('Timer App');
     })

    it('should render a <div/> with className container', ()=>{
        const container = wrapper.find('div.container');
        expect(container.exists()).toBe(true);
        expect(container.length).toEqual(1);
    });

    it('the App wrapper should have <TimeDisplayer/> as child component',()=>{
        const container = wrapper.find(TimeDisplayer);
        expect(container.length).toEqual(1);
    });

    it('when click on start button, its text should be changed to stop and when on stop it should changed to start',()=>{
        const startTimer = jest.spyOn(utils, 'startTimer');
        const stopTimer = jest.spyOn(utils, 'stopTimer');
        wrapper  = mount(<App/>) // for using jest.spyOn (render, shallow or mount) should be after the jest.spyOn
        expect(wrapper.find('div.controller').length).toEqual(1);
        const startStopBtn = wrapper.find('div.controller').children('button');
        const resetBtn = wrapper.find('.resetBtn');
        expect(startStopBtn.length).toEqual(1);
        expect(startTimer).toBeCalledTimes(0); // checking start timer calling
        expect(startStopBtn.text()).toEqual('Start');
        startStopBtn.simulate('click');
        expect(startTimer).toBeCalledTimes(1); // checking start timer calling
        expect(stopTimer).toBeCalledTimes(0); // checking stopTimer calling
        expect(startStopBtn.text()).toEqual('Stop');
        startStopBtn.simulate('click');
        expect(stopTimer).toBeCalledTimes(1); // checking stopTimer calling
        expect(startStopBtn.text()).toEqual('Start');
        startStopBtn.simulate('click');
        expect(startStopBtn.text()).toEqual('Stop');
        resetBtn.simulate('click'); // when click on reset button stop button text should be changed to start button
        expect(startStopBtn.text()).toEqual('Start');
    })

    it('When click on Reset button ResetTimer should be called',()=>{
        const resetTimer = jest.spyOn(utils, 'resetTimer');
        wrapper  = mount(<App/>);
        const resetBtn = wrapper.find('.resetBtn');
        expect(resetTimer).toBeCalledTimes(0); // when on button click
        resetBtn.simulate('click');
        expect(resetTimer).toBeCalledTimes(1); // when button click
    })

    it('Checking for the TimeDisplay initital time and when the reset button clicked time should be 00:0000',()=>{
        const timeDisplayer = wrapper.find(TimeDisplayer);
        const resetBtn = timeDisplayer.find('.resetBtn').first();
        const timeDialer = timeDisplayer.find('.dialer');
        expect(timeDialer.text()).toBe('00:0000');
        act(()=>{setTime({min:25,sec:4, miliSec:52})});
        expect(timeDialer.text()).toBe('25:0452');
        resetBtn.simulate('click');
        expect(timeDialer.text()).toBe('00:0000');
    })

});
