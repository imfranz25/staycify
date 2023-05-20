'use client';

import React, { useMemo } from 'react';
import { SafeListing, SafeUser } from '@/app/types';
import { Reservation } from '@prisma/client';

import Container from '@/app/components/UI/Container';
import ListingHead from '@/app/components/Listings/ListingHead';
import ListingInfo from '@/app/components/Listings/ListingInfo';
import { CATEGORIES } from '../../../constants/categories';

interface ListingClientProps {
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
  reservation?: Reservation[];
}

const ListingClient: React.FC<ListingClientProps> = ({ listing, currentUser }) => {
  const category = useMemo(() => {
    return CATEGORIES.find((item) => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto my-10">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 my-6 md:grid-cols-7 md:gap-100">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
