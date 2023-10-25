export default {
  main: {
    backgroundColor: '#fff',
    border: '1px solid #e6e6e6',
    borderBottomRightRadius: '3px',
    borderTopRightRadius: '3px',
    maxWidth: '935px',
    margin: '4.8rem auto',
    width: 'calc(100% - 4rem)',

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
    height: '44rem',
  },

  imageColumn: {
    order: '1',
    flex: '1 0 60%',
    alignSelf: 'flex-start',
    backgroundColor: '#fbfbfa',
    height: '100%'
  },

  contentColumn: {
    order: '2',
    flex: '1 0 calc(40% - 3rem)',
    alignSelf: 'flex-start',
    height: '100%',
    paddingInlineStart: '3rem',
    display: 'flex',
    flexGrow: 'wrap',
    height: '100%',
    flexDirection: 'column'
  },
}
