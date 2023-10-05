import { ButtonDlt, Wrapper } from "./ContactItem.styled";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ContactItem = ({ item: { name, phone }, itemId }) => {
    const dispatch = useDispatch();
    const deleteHandContact = (itemId) => dispatch(deleteContact(itemId));
    return (
        <Wrapper>
            <>{name}: {phone}</>
            <ButtonDlt type="button" onClick={() => deleteHandContact(itemId)}>Delete</ButtonDlt>
        </Wrapper>
        
        
    )
}
