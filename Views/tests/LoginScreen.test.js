import LoginScreen from "../LoginScreen";
import renderer, {act} from 'react-test-renderer'


describe('Login Screen', () =>{
    it('renders LoginScreen component', ()=>{
        expect(renderer.create(<LoginScreen/>)).toMatchSnapshot()
    })
})