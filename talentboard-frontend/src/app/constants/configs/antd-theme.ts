import { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorInfo: '#0f71c8',
    colorSuccess: '#1677ff',
    colorPrimaryBg: '#9ea1a821',
    colorBgContainer: '#FAFBFD',
  },
  components: {
    Button: {
      defaultActiveBorderColor: 'rgb(15, 113, 200)',
      defaultActiveBg: 'rgb(15, 113, 200)',
      defaultActiveColor: 'rgb(255, 255, 255)',
    },
    Table: {
      headerSplitColor: 'rgb(100, 100, 100)',
    },
  },
};
