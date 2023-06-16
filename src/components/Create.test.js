import {render, fireEvent} from '@testing-library/react';
import Create from './Create';

describe ('Create component', () => {
    test('checkPsw funksjonen skal sette pswMatch til true når passordene er like', () => {
        const {getByLabelText, queryByText} = render (<Create />);

        // Setter like passord for passord og gjenta passord
        const pswInput = getByLabelText ('Passord');
        fireEvent.change(pswInput, {target: {value: 'Passord123'} });

        const conPswInput = getByLabelText ('Gjenta passord');
        fireEvent.change(conPswInput, {target: {value: 'Passord123'} });

        // Sjekker at pswMatch er true
        const pswMatchTrueFalse = queryByText ('Passord er ulike.', {exact: false});
        expect(pswMatchTrueFalse).toBeNull();
    });
})