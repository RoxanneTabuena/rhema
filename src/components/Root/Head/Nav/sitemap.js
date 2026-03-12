export const siteMap = {
    "About" : {
        link: '/about',
        children: {
                'Operations and Legacy' : '/about',
                'lacoustics' : '/lacoustics',
                'Promotions' : '/',
                'Our Team' : {
                link: '/ourExperts',
                children: {
                    'Team Directory' : '/ourExperts',
                    'Careers' : '/purpleShirts',
                }},}
        },
    "Live Sound Services" : {
        link: '/livesound',
        children: {
            'Info & Pricing' : '/livesound',
            'Event Types' : {
                link : '/events',
                children: {
                    'Headliners ':'/events/headliners',
                    'Corprate' : '/events/corporate',
                    'Weddings' : '/events/weddings',
                    'Conventions' : 'events/conventions',
                    'Contests' : 'events/contests'
                }},
            'Request a Quote' : '/bookLiveSound'
        }
    },
    "Backline Rentals" : {
        link : '/rentals',
        children: {
            'Rental Protocol' : '/rentals',
            'Inventory' : '/inventory',
            'Start a Reservation' : '/rentalRequest'
        }
    },
    'Booking' : {
        link : '/booking',
        children: {
            'Live Sound' : '/bookLiveSound',
            'Backline Rentals' : '/rentalRequest'
        }
    },
    'Contact' : {
        link: '/contact',
        children: {
            'Event Support' : '/bookLiveSound',
            'Rentals & Inventory' : '/rentalRequest',
            'General Inquiries' : '/generalInquiry'
        }
    }
}