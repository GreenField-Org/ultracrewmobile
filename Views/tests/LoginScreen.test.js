import LoginScreen from "../LoginScreen";
import renderer, {act} from 'react-test-renderer'


describe('Login Screen', () =>{
    it('', ()=>{
        expect(renderer.create(<LoginScreen/>)).toMatchSnapshot()
    })
})