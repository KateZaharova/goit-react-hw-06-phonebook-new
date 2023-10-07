import { ContactItem } from "../ContactItem/ContactItem";
import { LiItem } from "./ContactList.styled";
import { getContacts, getFilter } from "redux/selectors";
import { useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";



export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter).value;
    const filteredContacts = contacts.list.filter(item => {  
      return item.contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return (
        <div>
            <ul>
                {filteredContacts.map(item => (
                    <LiItem key={item.id}>
                        <ContactItem item={item.contact} itemId={item.id} onDelete={deleteContact} />
                    </LiItem>
                ))}
            </ul>
        </div>
    )
}