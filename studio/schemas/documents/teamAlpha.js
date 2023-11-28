import { TbAlpha } from "react-icons/tb";

export default {
    name: 'teamAlpha',
    type: 'document',
    title: 'Team Alpha',
    icon: TbAlpha,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Full Name'
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture'
        },
        {
            name: 'role',
            type: 'string',
            title: 'Role'
        },
        {
            name: 'favoriteRule',
            type: 'string',
            title: 'Favorite Rule'
        },
        {
            name: 'favoriteSong',
            type: 'string',
            title: 'Favorite Song'
        },
        {
            name: 'favoritePerson',
            type: 'string',
            title: 'Favorite Person'
        },
        {
            name: 'randomFact',
            type: 'string',
            title: 'Random Fact'
        }
    ]
}