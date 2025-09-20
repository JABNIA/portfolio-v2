import React, { useState } from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { colors } from '../styles/colors';
import DelayedRenderer from '../components/UI components/DelayedRenderer';
import ScrollTriggeredRenderer from '../components/UI components/ScrollTriggeredRenderer';
import { useSequentialRender } from '../hooks/useSequentialRender';

// Sample data for examples
const sampleItems = [
  { id: 1, text: "First item", color: colors.neonColorGreen },
  { id: 2, text: "Second item", color: colors.titleOrange },
  { id: 3, text: "Third item", color: colors.descriptionCyan },
  { id: 4, text: "Fourth item", color: colors.neonColorGreen },
  { id: 5, text: "Fifth item", color: colors.titleOrange },
];

function DelayedRenderingExamples() {
  const [showExample, setShowExample] = useState<string>('');

  // Example 1: Basic DelayedRenderer
  const Example1 = () => (
    <Box sx={{ p: 2, border: `1px solid ${colors.neonColorGreen}`, borderRadius: 1 }}>
      <Typography variant="h6" sx={{ color: colors.titleOrange, mb: 2 }}>
        Example 1: Basic Delayed Renderer
      </Typography>
      <DelayedRenderer items={sampleItems} delay={500}>
        {(item, index) => (
          <Box
            key={item.id}
            sx={{
              p: 1,
              mb: 1,
              backgroundColor: item.color,
              color: colors.mainDark,
              borderRadius: 1,
              opacity: 0,
              animation: 'fadeIn 0.5s ease-in forwards',
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {item.text} (rendered at index {index})
          </Box>
        )}
      </DelayedRenderer>
    </Box>
  );

  // Example 2: Using the Custom Hook
  const Example2 = () => {
    const { visibleItems, isComplete, reset } = useSequentialRender(sampleItems, {
      delay: 300,
      startImmediately: showExample === 'hook'
    });

    return (
      <Box sx={{ p: 2, border: `1px solid ${colors.titleOrange}`, borderRadius: 1 }}>
        <Typography variant="h6" sx={{ color: colors.titleOrange, mb: 2 }}>
          Example 2: Custom Hook with Reset
        </Typography>
        <Button 
          onClick={reset} 
          variant="outlined" 
          sx={{ mb: 2, color: colors.neonColorGreen, borderColor: colors.neonColorGreen }}
        >
          Reset Animation
        </Button>
        {visibleItems.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              p: 1,
              mb: 1,
              backgroundColor: item.color,
              color: colors.mainDark,
              borderRadius: 1,
              transform: 'scale(0.8)',
              animation: 'scaleIn 0.3s ease-out forwards',
              '@keyframes scaleIn': {
                '0%': { transform: 'scale(0.8)', opacity: 0 },
                '100%': { transform: 'scale(1)', opacity: 1 },
              },
            }}
          >
            {item.text} (hook rendered)
          </Box>
        ))}
        {isComplete && (
          <Typography sx={{ color: colors.descriptionCyan, mt: 1 }}>
            ✅ All items loaded!
          </Typography>
        )}
      </Box>
    );
  };

  // Example 3: Scroll-triggered rendering
  const Example3 = () => (
    <Box sx={{ p: 2, border: `1px solid ${colors.descriptionCyan}`, borderRadius: 1 }}>
      <Typography variant="h6" sx={{ color: colors.titleOrange, mb: 2 }}>
        Example 3: Scroll-triggered Rendering
      </Typography>
      <Typography sx={{ color: colors.descriptionCyan, mb: 2, fontSize: '14px' }}>
        Scroll down to see items appear as they come into view
      </Typography>
      <Box sx={{ height: '200px', overflowY: 'auto' }}>
        <ScrollTriggeredRenderer items={sampleItems} delay={200}>
          {(item, index, isVisible) => (
            <Box
              key={item.id}
              sx={{
                p: 2,
                mb: 2,
                backgroundColor: isVisible ? item.color : colors.mainDark,
                color: isVisible ? colors.mainDark : colors.neonColorGreen,
                borderRadius: 1,
                border: `1px solid ${item.color}`,
                transition: 'all 0.3s ease',
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isVisible ? 1 : 0.3,
              }}
            >
              {item.text} {isVisible ? '👁️' : '👁️‍🗨️'}
            </Box>
          )}
        </ScrollTriggeredRenderer>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ p: 3, backgroundColor: colors.mainDark, minHeight: '100vh' }}>
      <Typography 
        variant="h4" 
        sx={{ 
          color: colors.neonColorGreen, 
          mb: 3, 
          textAlign: 'center',
          fontFamily: "LCD2, Arial, Helvetica, sans-serif"
        }}
      >
        Delayed Rendering Examples
      </Typography>
      
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            onClick={() => setShowExample('basic')}
            variant={showExample === 'basic' ? 'contained' : 'outlined'}
            sx={{ color: colors.neonColorGreen, borderColor: colors.neonColorGreen }}
          >
            Show Basic Example
          </Button>
          <Button 
            onClick={() => setShowExample('hook')}
            variant={showExample === 'hook' ? 'contained' : 'outlined'}
            sx={{ color: colors.neonColorGreen, borderColor: colors.neonColorGreen }}
          >
            Show Hook Example
          </Button>
          <Button 
            onClick={() => setShowExample('scroll')}
            variant={showExample === 'scroll' ? 'contained' : 'outlined'}
            sx={{ color: colors.neonColorGreen, borderColor: colors.neonColorGreen }}
          >
            Show Scroll Example
          </Button>
        </Box>

        {showExample === 'basic' && <Example1 />}
        {showExample === 'hook' && <Example2 />}
        {showExample === 'scroll' && <Example3 />}
      </Stack>
    </Box>
  );
}

export default DelayedRenderingExamples;
