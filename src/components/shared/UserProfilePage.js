import React from 'react';
import { Box, Flex, Image } from 'rebass';
import IconLink from './IconLink';

class UserProfilePage extends React.Component {
  render() {
    const fields = [
      {
        section: {
          name: 'Personal info',
          items: [
            { label: 'First Name', value: 'Evgenios' },
            { label: 'Last Name', value: 'Skitsanos' },
            { label: 'Email', value: 'info@skitsanos.com' },
            { label: 'Birthday', value: 'July 16th' },
            { label: 'Gender', value: 'Male' },
            { label: 'Phone', value: '+1 (941) 840-0716' }
          ]
        }
      },
      {
        section: {
          name: 'Additional Fields',
          items: [
            { label: 'Employment Code', value: 'SD./UX/' },
            { label: 'Department', value: 'R&D' }
          ]
        }
      }
    ];

    const { name, description } = this.props;
    return (
      <Box {...this.props}>
        <Flex
          flex={1}
          backgroundColor="snow"
          p={3}
          alignItems="flex-end"
          sx={{
            borderBottom: 'solid 1px',
            borderColor: 'thirdly'
          }}
        >
          <Image
            sx={{
              borderRadius: 4,
              border: 'solid 3px',
              borderColor: 'thirdly'
            }}
            src="http://picsum.photos/100"
          />

          <Box flex={1} pl={2}>
            <Box flex={1} pl={2} color="grey" variant="section_subtitle">
              {description}
            </Box>

            <Box flex={1} pl={2} variant="section_title">
              {name}
            </Box>

            <Flex flex={1} pl={1}>
              <IconLink name="camera" />
              <IconLink name="lock" />
              <IconLink name="github" brands />
              <IconLink name="linkedin" brands />
            </Flex>
          </Box>
        </Flex>

        <Box
          mt={2}
          maxWidth="700px"
          ml="6rem"
          mr="6rem"
          sx={{
            '@media screen and (max-width: 610px)': {
              margin: 1
            },
            '@media screen and (min-width: 611px) and (max-width: 960px)': {
              margin: 2
            },
            '@media screen and (min-width: 961px) and (max-width: 1280px)': {}
          }}
        >
          <Box variant="section_subtitle">About me</Box>

          <Box variant="intro" mb={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vitae commodo neque. Sed vehicula pretium rutrum. Nullam lorem eros,
            congue sed porta vitae, ultricies vitae erat. Duis vitae feugiat
            lorem. Curabitur maximus pellentesque magna nec bibendum.
            Suspendisse tristique eleifend mauris amet.
          </Box>

          <Box>
            {fields.map((field, field_key) => {
              return (
                <Box key={field_key} mb={3}>
                  <Box variant="section_subtitle">{field.section.name}</Box>
                  <Box variant="formbox">
                    {field.section.items &&
                      field.section.items.map((item, item_key) => {
                        return (
                          <React.Fragment key={item_key}>
                            <Box>{item.label}</Box>
                            <Box>{item.value}</Box>
                          </React.Fragment>
                        );
                      })}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default UserProfilePage;
