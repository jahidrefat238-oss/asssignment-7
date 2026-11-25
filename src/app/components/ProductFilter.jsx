
"use client";

import { Button, Dropdown, Header, Label } from "@heroui/react";

export default function ProductFilter({ value, onChange }) {

    const CustomCheckmarkIcon = (
        <svg
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="text-accent-soft-foreground"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    );

    const handleSelection = (keys) => {
        onChange(Array.from(keys)[0] || "");
    };

    return (
        <Dropdown>

            <Button
                aria-label="Product Filter"
                variant="secondary"
                className="h-9 min-w-[88px] gap-1 rounded-lg border border-[#D1D5DB] bg-[#FAFCFA] px-3 text-[13px] font-medium text-[#26352C] shadow-none hover:bg-[#F0F5F1]"
            >
                {value === "up"
                    ? "দাম বেড়েছে"
                    : value === "down"
                    ? "দাম কমেছে"
                    : "ডিফল্ট"}

                <span className="text-[10px]">▼</span>
            </Button>

            <Dropdown.Popover className="min-w-[190px]">

                <Dropdown.Menu
                    selectedKeys={value ? new Set([value]) : new Set()}
                    selectionMode="single"
                    onSelectionChange={handleSelection}
                >

                    <Dropdown.Section>
                        <Header>দাম অনুযায়ী ফিল্টার</Header>

                        <Dropdown.Item id="up" textValue="দাম বেড়েছে">
                            <Dropdown.ItemIndicator>
                                {({ isSelected }) =>
                                    isSelected ? CustomCheckmarkIcon : null
                                }
                            </Dropdown.ItemIndicator>
                            <Label>দাম বেড়েছে</Label>
                        </Dropdown.Item>

                        <Dropdown.Item id="down" textValue="দাম কমেছে">
                            <Dropdown.ItemIndicator>
                                {({ isSelected }) =>
                                    isSelected ? CustomCheckmarkIcon : null
                                }
                            </Dropdown.ItemIndicator>
                            <Label>দাম কমেছে</Label>
                        </Dropdown.Item>

                    </Dropdown.Section>

                </Dropdown.Menu>

            </Dropdown.Popover>

        </Dropdown>
    );
}
