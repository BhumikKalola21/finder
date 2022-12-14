import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../TheSideBar/TheSidebar.vue'),
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../view/TheUsers.vue'),
    },
    {
        path: '/contracts',
        name: 'Contracts',
        component: () => import('../view/TheContractlength.vue'),
    },
    {
        path: '/amenities',
        name: 'amenities',
        component: () => import('../view/TheAmenities.vue'),
    },
    {
        path: '/additionaloptions',
        name: 'additionaloptions',
        component: () => import('../view/TheAdditionOptional.vue'),
    },
    {
        path: '/layoutdesigns',
        name: 'layoutdesigns',
        component: () => import('../view/LayoutOption.vue'),
    },
    {
        path: '/nearbyamenities',
        name: 'nearbyamenities',
        component: () => import('../view/ThenearbyAmenities.vue'),
    },
    {
        path: '/bookedcontract',
        name: 'bookedcontract',
        component: () => import('../view/ThebookedContract.vue'),
    },
    {
        path: '/properties',
        name: 'properties',
        component: () => import('../view/TheProperties.vue'),
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: () => import('../view/TheContactUs.vue'),
    }, {
        path: '/offer',
        name: 'offer',
        component: () => import('../view/TheOffers.vue'),
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;