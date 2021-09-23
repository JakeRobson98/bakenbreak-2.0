import * as cheeseBurger from "./costings/cheeseBurger.json"
import * as bbqBurger from "./costings/bbqCheeseBurger.json"
import * as tofu from "./costings/bbqCheeseBurger.json"
const INITIAL_STATE = {
    cheeseBurger: cheeseBurger,
    bbqCheeseBurger: bbqBurger,
    tofuCheeseBurger: tofu
};
export default function costings(state = INITIAL_STATE, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}