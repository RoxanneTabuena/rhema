export const siteMap = {

    "About": {
        link: "/about",
        children: {
        "Operations and Legacy": { link: "/about" },
        "Promotions": { link: "/" },
        "Our Team": {
            link: "/ourExperts",
            children: {
            "Team Directory": { link: "/ourExperts" },
            "Careers": { link: "/purpleShirts" }
            }
        }
        }
    },
    "Live Sound Services": {
        link: "/livesound",
        children: {
        "Info & Pricing": { link: "/livesound" },
        "Headliners": { link: "/events/headliners" },
        "Corporate": { link: "/events/corporate" },
        "Weddings": { link: "/events/weddings" },
        "Conventions": { link: "/events/conventions" },
        "Contests": { link: "/events/contests" },
        "Request a Quote": { link: "/bookLiveSound" }
        }
    },
    "Backline Rentals": {
        link: "/rentals",
        children: {
        "Rental Protocol": { link: "/rentals" },
        "Inventory": { link: "/inventory" },
        "Start a Reservation": { link: "/rentalRequest" }
        }
    },
    "Booking": {
        link: "/booking",
        children: {
        "Live Sound": { link: "/bookLiveSound" },
        "Backline Rentals": { link: "/rentalRequest" }
        }
    },
    "Contact": {
        link: "/contact",
        children: {
        "Event Support": { link: "/bookLiveSound" },
        "Rentals & Inventory": { link: "/rentalRequest" },
        "General Inquiries": { link: "/generalInquiry" }
        }
    }
}