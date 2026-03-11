export const siteMap = {
    "Live Sound Services" : {
        link: '/liveSound',
        children: [
            {'Info & Pricing' : '/liveSoundInfo'},
            { 'Event Types' : {
                link : '/events',
                children: [
                    {'Headliners ':'/headliners'},
                    {'Corprate' : '/corporate'},
                    {'Weddings' : '/weddings'},
                    {'Conventions' : '/conventions'},
                    {'Contests' : '/contests'}
                ]
            }
            },
            {'Request a Quote' : '/bookLiveSound'}
        ]
    },
    "Backline Rentals" : {
        link : '/backline',
        children: [
            {'Rental Protocol' : '/backlineInfo'},
            {'Inventory' : '/inventory'},
            {'Start a Reservation' : '/rentalRequest'}
        ]
    },
    'Booking' : {
        link : '/booking',
        children: [
            {'Live Sound' : '/bookLiveSound'},
            {'Backline Rentals' : '/rentalRequest'}
        ]
    },
    'Purple Shirts' : {
        link: '/purpleShirts',
        children: [
            {'Team Directory' : '/ourExperts'},
            {'Careers' : '/joinRhema'},
        ]
    },
    'Contact' : {
        link: '/contact',
        children: [
            {'Event Support' : '/bookLiveSound'},
            {'Rentals & Inventory' : '/rentalRequest'},
            {'General Inquiries' : '/generalInquiry'}
        ]
    }
}