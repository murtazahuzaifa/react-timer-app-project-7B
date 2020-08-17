import React from 'react';
import {shallow, mount} from 'enzyme';
import App, {timerIsOn, time, setTime} from './App';
import {TimeDisplayer} from '../../components';
import { act } from 'react-dom/test-utils';

describe('App', ()=>{

    let wrapper  = mount(<App/>)
    // let wrapper:any;
    // beforeEach(()=> wrapper  = shallow(<App/>) )

    it('should render a <div/> with className container', ()=>{
        const container = wrapper.find('div.container');
        expect(container.exists()).toBe(true);
        expect(container.length).toEqual(1);
    });

    it('the App wrapper should have <TimeDisplayer/>',()=>{
        const container = wrapper.find(TimeDisplayer);
        expect(container.length).toEqual(1);
    });

    // it('wrapper.container should have 2 divs, each div should have React component and its specified quantity',()=>{
    //     const container = wrapper.find('div.container');
    //     const divs = container.children('div');
    //     const childComponents = [TimeDisplayer, Button];
    //     const componentsQty = [1, 3];
    //     divs.map((div:any, index:number)=>{
    //         const component = div.find(childComponents[index]);
    //         expect(component.length).toEqual(componentsQty[index]);
    //     });
    // });

    // it('Checking for the TimeDisplay initital time and when the reset button clicked time should be 00:00',()=>{
    //     const timeDisplayer = wrapper.find(TimeDisplayer);
    //     expect(timeDisplayer.text()).toBe('00:00');
    //     act(()=>{setTime({min:25,sec:4})});
    //     expect(timeDisplayer.text()).toBe('25:04');
    //     const resetBtn = wrapper.find('.reset').first();
    //     resetBtn.simulate('click');
    //     expect(timeDisplayer.text()).toBe('00:00');
    // })

    // it('check for each timer button text',()=>{
    //     const buttons = wrapper.find(Button);
    //     const buttonText = ['Start', 'Stop', 'Reset'];     
    //     buttons.map((button:any, index:number)=>{
    //         expect(button.text()).toBe(buttonText[index]);
    //     });
    // });

    // it('checking for the timerIsOn state when start and stop button click', ()=>{
    //     expect(timerIsOn).toBe(false);
    //     wrapper.find('.start').first().simulate('click');
    //     expect(timerIsOn).toBe(true);
    //     wrapper.find('.stop').first().simulate('click');
    //     expect(timerIsOn).toBe(false);
    // });

});
