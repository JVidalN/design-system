import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { Tab, TabSet } from "./TabSet";
import { useState } from 'react';

export default {
    title: 'Design System/Componentes/TabSet',
    component: TabSet,
    subcomponents:{ Tab },
    decorators: [
        (Story) => (
            <div className="w-[700px] border rounded-md p-2 bg-brand-background">
                <h1 className="text-3xl font-bold mb-4">Exemplo da TabSet</h1>
                {Story()}
            </div>
        ),
      ],
} as ComponentMeta<typeof TabSet>;

export const Default: ComponentStory<typeof TabSet> = (args) => {
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
            <TabSet 
                {...args}
                onChange={(index: number) => setActiveTabIndex(index)}
                activeTabIndex={activeTabIndex}
            >
                <Tab label="Tab 1">
                    <p>Qualquer conteúdo da Tab 1.</p>
                </Tab>
                <Tab label="Tab 2">
                    <p>Qualquer conteúdo da Tab 2.</p>
                </Tab>
                <Tab label="Tab 3">
                    <p>Qualquer conteúdo da Tab 3.</p>
                </Tab>
            </TabSet>
    )
}

export const WithIcon: ComponentStory<typeof TabSet> = (args) => {
    const tabOne = () => {
        return (
            <>
                <span>Tab 1</span>
                <Icon name='check' color='text-alert-success-dark' width='18' height='18' />
            </>
        )
    }
    const tabThree = () => {
        return (
            <>
                <span>Tab 3</span>
                <Icon name='cancel' color='text-alert-danger-dark' width='18' height='18' />
            </>
        )
    }
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <TabSet 
            {...args}
            onChange={(index: number) => setActiveTabIndex(index)}
            activeTabIndex={activeTabIndex}
        >
            <Tab label={tabOne()}>
                <p>Content for Tab 1 goes here.</p>
            </Tab>
            <Tab label="Tab 2">
                <p>Content for Tab 2 goes here.</p>
            </Tab>
            <Tab label={tabThree()}>
                <p>Content for Tab 3 goes here.</p>
            </Tab>
        </TabSet>
    )
}
