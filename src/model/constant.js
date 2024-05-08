import lemonAvatar from "../assets/img/lemon-avatar.png";
import greekSalad from "../assets/img/greek salad.jpg";
import marioAndAdrianA from "../assets/img/Mario and Adrian A.jpg";
import marioAndAdrianB from "../assets/img/Mario and Adrian b.jpg";
import restaurantFood from "../assets/img/restauranfood.jpg";

export const testimonialItems = [
    {
        title: 'Rating',
        profileImgSrc: lemonAvatar,
        profileName: 'Name',
        content: 'Leave Rating'
    },
    {
        title: 'Rating',
        profileImgSrc: lemonAvatar,
        profileName: 'Name',
        content: 'Leave Rating'
    },
    {
        title: 'Rating',
        profileImgSrc: lemonAvatar,
        profileName: 'Name',
        content: 'Leave Rating'
    },
    {
        title: 'Rating',
        profileImgSrc: lemonAvatar,
        profileName: 'Name',
        content: 'Leave Rating'
    },
]
export const foodItems = [
    {
        srcImage: greekSalad,
        title: 'Greek Salad',
        price: '$12.99',
        content: `Lorem ipsum dolor sit amet, consectetur a
                  dipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.`,
        bottomLabel: 'Order for a delivery',
        bottomIconSrc: undefined
    },
    {
        srcImage: greekSalad,
        title: 'Greek Salad',
        price: '$12.99',
        content: `Lorem ipsum dolor sit amet, consectetur a
                  dipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.`,
        bottomLabel: 'Order for a delivery',
        bottomIconSrc: undefined
    },
    {
        srcImage: greekSalad,
        title: 'Greek Salad',
        price: '$12.99',
        content: `Lorem ipsum dolor sit amet, consectetur a
                  dipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.`,
        bottomLabel: 'Order for a delivery',
        bottomIconSrc: undefined
    }
];

export const aboutObj = {
    title: 'Little Lemon',
    subTitle: 'Chicago',
    content: `
        Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit,sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore 
        et dolore magna aliqua.`,
    imgSrcOne: marioAndAdrianA,
    imgSrcTwo: marioAndAdrianB,
}

export const jumbotronObj = {
    title: 'Little Lemon',
    subtitle: 'Chicago',
    description: `We are a family owned
                Mediterranean restaurant,
                focused on traditional
                recipes served with a modern
                twist.`,
    callToActionButtonLabel: 'Reserve a table',
    imgSrc: restaurantFood,
    altImg: 'restaurant food'
}