import Crust from "./steps/Crust ";
import Sauce from './steps/Sauce'
import Cheese from './steps/Cheese'
import Protein from './steps/Protein'
import Service from "./steps/Service";
import Veggies from "./steps/Veggies";
import Name from './steps/Name';
import Review from './steps/Review';
import Submit from './steps/Submit';

export const defultData = {
    crust: 'Original',
    sauce: "redSauce",
    whiteSauce: "dairy",
    cheese: 'Mozzarella',
    protein: 'Anchovies',
    veggies: {},
    service: 'Delivery',
    name: ''
};

export default {
    Crust: { id: 'Crust', component: Crust },
    Sauce: { id: 'Sauce', component: Sauce },
    Cheese: { id: 'Cheese', component: Cheese },
    Protein: { id: 'Protein', component: Protein },
    Service: { id: 'Service', component: Service },
    Veggies: { id: 'Veggies', component: Veggies },
    Name: { id: 'Name', component: Name },
    Review: { id: 'Review', component: Review },
    Submit: { id: 'Submit', component: Submit }
}

