import { ContactForm } from 'components/Phonebook/ContactsForm';
import { ContactList } from 'components/Phonebook/ContactsList';
import { Filter } from 'components/Phonebook/Filter';
import {
  SectionContacts,
  SectionPhonebook,
} from 'components/Phonebook/Sections';

export const Contacts = () => {
  return (
    <>
      <SectionPhonebook>
        <ContactForm />
      </SectionPhonebook>
      <SectionContacts>
        <Filter />
        <ContactList />
      </SectionContacts>
    </>
  );
};
