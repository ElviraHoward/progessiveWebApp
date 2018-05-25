import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "personal_parties": "Personal parties",
                    "categories": "categories",
                    "party1": "party1",
                    "party2": "party2",
                    "party3": "party3",
                    "description": "description",
                    "free_entry": "free_entry",
                    "date_and_time": "date_and_time",
                    "cost": "cost",
                    "address": "address",
                    "category": "category",
                    "save": "save",
                    "edit": "edit",
                    "delete": "delete",
                    "add_new_party": "add_new_party",
                    "add_new_category": "add_new_category",
                    "concert": "concert",
                    "club": "club",
                    "in_house": "in_house",
                    "bla-bla": "bla-bla"
                }
            },
            ru: {
                translations: {
                    "personal_parties": "Мои вечеринки",
                    "categories": "Категории",
                    "party1": "ВЕЧЕРИНКА 1",
                    "party2": "ВЕЧЕРИНКА 2",
                    "party3": "ВЕЧЕРИНКА 3",
                    "name": "Название",
                    "description": "Описание",
                    "free_entry": "Вход свободный",
                    "date_and_time": "Дата и время",
                    "cost": "Стоимость",
                    "address": "Адрес",
                    "category": "Категория",
                    "save": "Сохранить",
                    "edit": "Изменить",
                    "delete": "Удалить",
                    "add_new_party": "Добавить вечеринку",
                    "add_new_category": "Добавить категорию",
                    "concert": "Концерт",
                    "club": "Клубная вечеринка",
                    "in_house": "Квартирник",
                    "bla_bla": "Бла-бла"
                }
            }
        },
        fallbackLng: 'ru',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;