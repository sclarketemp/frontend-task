export default {
  // Poster icon, name, location styling...
  contentHeader: {
    borderBlockEnd: '1px solid #efeef1',
    marginInlineEnd: '3rem',
    paddingBlock: '1.6rem',
  },

  contentHeaderInner: {
    maxWidth: '22rem',
    display: 'flex',
    gap: '1.2rem',
    alignItems: 'center'
  },

  userIcon: {
    width: '4rem',
    height: '4rem',
    borderRadius: '100%',
    overflow: 'hidden',
    backgroundColor: 'black'
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem'
  },

  userName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '1'
  },

  userLocale: {
    fontSize: '1.1rem',
    lineHeight: '1'
  },

  // Verbal interaction area...
  contentMain: {
    overflowY: 'auto',
    paddingInlineEnd: '3.2rem',
    height: '100%'
  },

  // Tool interaction area...
  contentFooter: {
    paddingInlineEnd: '3rem'
  },

  contentFooterInner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: '0.4rem'
  },

  info: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '0.8rem'
  },

  likeCount: {
    fontWeight: '700',
    fontSize: '1.3rem'
  },

  // Like Button
  likeButton: {
    paddingBlock: '0.4rem',
    display: 'flex',
    height: 'fit-content'
  }
}
