export const getcolumns = (serchvalue) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filteredValue: [serchvalue],
    onFilter: (value, record) => {
      return (
        String(record.name).toLowerCase().includes(value.toLowerCase()) ||
        String(record.phone).toLowerCase().includes(value.toLowerCase())
      );
    },
  },
  {
    title: "phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "WalletAmount",
    dataIndex: "WalletAmount",
    key: "WalletAmount",
  },

  // {
  //   title: "Action",
  //   dataIndex: "Action",
  //   key: "Action",
  // },
];
