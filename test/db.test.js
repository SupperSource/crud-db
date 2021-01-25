const db = require('./../db');

describe('crub-db', () => {
  describe('create-read-update', () => {
    it('should initialize database.dbs and make key-value pairs', () => {
      db.initialize();
      const data = db.add('crud-db', 'is the best db ever');
      expect(data).toBe('is the best db ever');
      const got = db.get('crud-db');
      expect(got).toBe('is the best db ever');
    });
  });
  describe('delete', () => {
    it('should update the following db key-value', () => {
      db.initialize();
      const vanishedKey = db.vanish('crud-db');
      const allData = db.readAllData();
      expect(allData).toEqual({});
      expect(vanishedKey).toEqual('is the best db ever');
    });
  });
});