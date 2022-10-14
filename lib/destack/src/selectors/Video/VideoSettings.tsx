import React from 'react'

import { ToolbarSection, ToolbarItem } from '../../toolbar/index'

export const VideoSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection title="Youtube">
        <ToolbarItem full={true} propKey="videoId" type="text" label="Video ID" />
      </ToolbarSection>
    </React.Fragment>
  )
}
