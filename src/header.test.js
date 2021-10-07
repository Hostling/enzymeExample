import Header from "./Header";
import * as enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({adapter: new Adapter()});

describe('Header Test', () => {
   it('Button existing', () => {
       const hr = enzyme.render(<Header name="hello" />);
       expect(hr.find("button").length).toEqual(1);
   });

   it('h1 correct props text', () => {
       const hr = enzyme.render(<Header name="hello" />);
       expect(hr.find("h1").text()).toEqual("hello");
   });

   // it('Click test', () => {
   //     // const hr = enzyme.render(<Header name="hello" />);
   //     const exit = jest.fn();
   //     const hm = enzyme.mount(<Header name="hello" onExit={exit} />);
   //     hm.find("button").simulate("click");
   //     expect(exit.mock.calls).toEqual([[]]);
   // });
});