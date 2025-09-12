import React, { useEffect, useState } from 'react';
import Service from '../utils/http';
import { Center, Text, Stack, Image } from '@mantine/core';

const obj = new Service();

export function Profile() {
  const [user, setUser] = useState({});

  const getProfileData = async () => {
    try {
      let data = await obj.get('user/me');
      setUser(data);
      console.log("Fetched user data:", data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Center style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #a1c4fd 100%)',
      padding: '20px'
    }}>
      <Stack align="center" spacing="md" style={{
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        maxWidth: '350px',
        width: '100%',
        minHeight: '200px' // Increased height for better layout
      }}>
        {/* Profile Picture */}
        {user?.avatar ? (
          <Image
            src={user.avatar}
            alt="Profile Picture"
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
          />
        ) : (
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKg5Ng2FilnE2VWNtv3LC5-Kf1O6E8Vmicg&s"
            alt="Default Avatar"
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
          />
        )}

        {/* Name */}
        <Text size="xl" weight={500}>
          {user?.name || "No Name"}
        </Text>

        {/* Email */}
        <Text color="dimmed">
          {user?.email || "No Email"}
        </Text>
      </Stack>
    </Center>
  );
}
