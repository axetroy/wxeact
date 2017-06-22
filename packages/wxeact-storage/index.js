/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-19
 * @author Liang <liang@maichong.it>
 */

import wx from 'wxeact';

export default {
  /**
   * @param key
   * @param callback
   * @returns {*}
   */
  async getItem(key, callback) {
    try {
      let res = await wx.getStorageAsync({ key });
      callback && callback(null, res.data);
      return res.data;
    } catch (error) {
      callback && callback(error);
      throw error;
    }
  },

  /**
   * @param key
   * @param data
   * @param callback
   */
  async setItem(key, data, callback) {
    try {
      await wx.setStorageAsync({ key, data });
      callback && callback(null);
    } catch (error) {
      callback && callback(error);
      throw error;
    }
  },

  /**
   * @param key
   * @param callback
   */
  async removeItem(key, callback) {
    try {
      await wx.removeStorageAsync({ key });
      callback && callback(null);
    } catch (error) {
      callback && callback(error);
      throw error;
    }
  },

  /**
   * @param callback
   */
  async clear(callback) {
    try {
      await wx.clearStorageAsync();
      callback && callback(null);
    } catch (error) {
      callback && callback(error);
      throw error;
    }
  },

  /**
   * @param callback
   */
  async getAllKeys(callback) {
    try {
      let res = await wx.getStorageInfoAsync();
      callback && callback(null, res.keys);
    } catch (error) {
      if (callback) callback(error);
      throw error;
    }
  }
};
