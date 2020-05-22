import uniqid from 'uniqid'
import faker from 'faker'




export const User = (function(){
    function User() {
        this.id = uniqid('ID-');
        this.name = faker.name.findName();
        this.last_name = faker.name.lastName();
        this.birthday = faker.random.number();
    }

    return User;
})();
