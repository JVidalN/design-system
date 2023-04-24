import { jsx as _jsx } from "react/jsx-runtime";
import './styles/global.css';
function App() {
    return (_jsx("div", Object.assign({ className: 'flex h-screen' }, { children: _jsx("div", Object.assign({ className: "m-auto" }, { children: "Usar o storybook para testar os componentes." })) })));
}
export default App;
